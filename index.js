// @flow
const { hasAnyDep } = require('ptils')

const react = hasAnyDep('react') && 'precure/react'
const jest = hasAnyDep('jest') && 'precure/jest'
const flow = hasAnyDep('flow-bin') && 'precure/flowtype'

module.exports = {
  extends: ['precure', jest, flow, react].filter(Boolean),
}
