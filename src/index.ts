/**
 * The E=MC^2 program
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022-10-19
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()
const speedOfLight = (2.998 * 10 ** 8) ** 2
const massAmountString = prompt('input mass (kg): ')
try {
  const massAmount = parseFloat(massAmountString)
  if (isNaN(massAmount)) {
    throw new Error('not a number')
  }
  if (massAmount <= 0) {
    throw new Error('negative number')
  }

  const energy = massAmount * speedOfLight
  console.log(`the energy produced is ${energy} J`)
} catch (e) {
  console.log('not a number')
}

console.log('\ndone.')
