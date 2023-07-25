import { inject } from 'vue';
import { Emitter } from 'mitt';

import { Events } from '@/types/events';

const useEmitter = () => inject('emitter') as Emitter<Events>;

export default useEmitter;
