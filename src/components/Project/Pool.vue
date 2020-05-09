<template>
  <section>
    <div class="flex flex-wrap justify-around text-center">
      <div class="p-2 m-2 bg-gray-700 rounded w-full md:w-1/3">
        <div class="">
          <h3>
            Current Pool Amount
          </h3>
        </div>
        {{ poolAmount }} DѦ
      </div>
      <div class="p-2 m-2 bg-gray-700 rounded w-full md:w-1/3">
        <div class="">
          <h3>
            Wallet Address
          </h3>
        </div>
        {{ poolWallet }}
        <button type="button"
          v-clipboard:copy="poolWallet"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError">
          <img class="inline-block" src="https://img.icons8.com/windows/32/ffffff/copy.png"/>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { Connection } from '@arkecosystem/client'

const client = new Connection(`https://dexplorer.ark.io/api`);
const poolWallet = 'DAw2LTUoyhwPEPi7MYokcHyKPusMEYTev6';

export default {
  name: 'Pool',
  data() {
    return {
      poolAmount: 0,
      poolWallet
    }
  },
  async beforeMount() {
    try {
      const senderWallet = await client.api('wallets').get(poolWallet);
      this.poolAmount = parseFloat(senderWallet.body.data.balance) / 100000000;
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    onCopy() {
      this.$toast.open({
        message: `Copied Development Pool Wallet Address ${this.poolWallet}`,
        type: 'success',
        duration: 5000,
        dismissible: true
      })
    },
    onError() {
      alert('Failed to copy texts')
    }
  }
}
</script>
