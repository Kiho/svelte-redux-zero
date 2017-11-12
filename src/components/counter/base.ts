import { connect } from 'redux-zero/svelte';
import store from '../../store/store';

export default {
    data() {
        return {
            counter: 0,
        }
    },
    oncreate(mapToProps) {
        connect(this, store, mapToProps);
    }
};