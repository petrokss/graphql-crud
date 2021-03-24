import { setupWorker } from 'msw';
import { handlers } from './handlers';

setupWorker(...handlers).start();
