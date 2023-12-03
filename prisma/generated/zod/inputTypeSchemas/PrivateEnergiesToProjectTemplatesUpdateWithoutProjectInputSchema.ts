import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema } from './PrivateEnergyUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema';

export const PrivateEnergiesToProjectTemplatesUpdateWithoutProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUpdateWithoutProjectInput> = z.object({
  energy: z.lazy(() => PrivateEnergyUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToProjectTemplatesUpdateWithoutProjectInputSchema;
