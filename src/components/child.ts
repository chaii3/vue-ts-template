import Component from 'vue-class-component';
import Vue from 'vue';
import * as StoreOperations from '../store/models/types';


@Component({
	template: `
	    <div @click="isActive = !isActive">
			Show store data

            <div v-if="isActive">{{storeData}}</div>
		</div>

      `,
})
export default class Child extends Vue {
	private isActive: boolean = false;

	private mounted(): void {
		console.log('child')
	}

	get storeData(): string {
		return this.$store.getters[StoreOperations.GET_STATE_DATA]();
	}
}
