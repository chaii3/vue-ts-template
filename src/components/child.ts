import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
	template: `<div>Child</div>`,
})
export default class Child extends Vue {
	private mounted(): void {
		console.log('log from child');
		console.log('log acti')
	}
}
