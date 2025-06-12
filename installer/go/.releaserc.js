module.exports = {
  tagFormat: 'installer-v${version}',
  branches: ['main'],
  plugins: [
    ['@semantic-release/commit-analyzer', {
      preset: 'angular',
      releaseRules: [
        { scope: '!installer', release: false },
        { scope: 'installer', type: 'feat', release: 'minor' },
        { scope: 'installer', type: 'fix', release: 'patch' },
        { scope: 'installer', type: 'perf', release: 'patch' },
        { scope: 'installer', type: 'refactor', release: 'patch' },
        { scope: 'installer', type: 'chore', release: 'patch' },
        { scope: 'installer', type: 'docs', release: 'patch' },
        { scope: 'installer', type: 'style', release: 'patch' },
        { scope: 'installer', type: 'test', release: 'patch' },
        { scope: 'installer', breaking: true, release: 'major' }
      ],
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES']
      }
    }],
    ['@semantic-release/release-notes-generator', {
      preset: 'angular',
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES']
      },
      writerOpts: {
        commitsSort: ['scope', 'subject']
      }
    }],
    '@semantic-release/changelog',
    ['@semantic-release/github', {
      assets: [
        {
          path: 'release-artifacts/flowfuse-device-installer-linux-amd64',
          label: 'Linux AMD64 Installer'
        },
        {
          path: 'release-artifacts/flowfuse-device-installer-linux-arm64',
          label: 'Linux ARM64 Installer'
        },
        {
          path: 'release-artifacts/flowfuse-device-installer-linux-arm',
          label: 'Linux ARM Installer'
        },
        {
          path: 'release-artifacts/flowfuse-device-installer-windows-amd64.exe',
          label: 'Windows AMD64 Installer'
        },
        {
          path: 'release-artifacts/flowfuse-device-installer-macos-amd64',
          label: 'macOS AMD64 Installer'
        },
        {
          path: 'release-artifacts/flowfuse-device-installer-macos-arm64',
          label: 'macOS ARM64 Installer'
        }
      ],
      releasedLabels: ['released'],
      successComment: false
    }]
  ]
};