$ErrorActionPreference = 'Stop'

$repositoryPath = Split-Path -Parent $PSScriptRoot
$expectedBranch = 'diseno/referencias-ongs-comunitarias'
$logPath = Join-Path (Split-Path -Parent $repositoryPath) 'design-branch-sync.log'

function Write-SyncLog {
  param([string]$Message)

  Add-Content -LiteralPath $logPath -Value "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') $Message"
}

try {
  $branch = (& git -C $repositoryPath branch --show-current 2>&1 | Out-String).Trim()
  if ($LASTEXITCODE -ne 0 -or $branch -ne $expectedBranch) {
    Write-SyncLog "Skipped: expected branch '$expectedBranch', found '$branch'."
    exit 1
  }

  & git -C $repositoryPath fetch --quiet origin $expectedBranch
  if ($LASTEXITCODE -ne 0) {
    Write-SyncLog 'Fetch failed; local files were not changed.'
    exit 1
  }

  $changes = & git -C $repositoryPath status --porcelain --untracked-files=all
  if ($LASTEXITCODE -ne 0) {
    Write-SyncLog 'Could not inspect local changes; local files were not changed.'
    exit 1
  }
  if ($changes) {
    Write-SyncLog 'Skipped: local changes detected; local files were not changed.'
    exit 0
  }

  $localCommit = (& git -C $repositoryPath rev-parse HEAD 2>&1 | Out-String).Trim()
  $remoteCommit = (& git -C $repositoryPath rev-parse "origin/$expectedBranch" 2>&1 | Out-String).Trim()
  if ($LASTEXITCODE -ne 0) {
    Write-SyncLog 'Could not resolve the remote branch; local files were not changed.'
    exit 1
  }
  if ($localCommit -eq $remoteCommit) {
    exit 0
  }

  & git -C $repositoryPath merge-base --is-ancestor HEAD "origin/$expectedBranch"
  if ($LASTEXITCODE -ne 0) {
    Write-SyncLog 'Skipped: remote history is not a fast-forward; local files were not changed.'
    exit 0
  }

  & git -C $repositoryPath merge --ff-only "origin/$expectedBranch"
  if ($LASTEXITCODE -ne 0) {
    Write-SyncLog 'Fast-forward failed; local files were not changed.'
    exit 1
  }

  Write-SyncLog "Updated to $remoteCommit."
  exit 0
}
catch {
  Write-SyncLog "Sync error: $($_.Exception.Message)"
  exit 1
}
