import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PrivateEnergiesToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUncheckedUpdateWithoutProjectInput> = z.object({
  energyId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PrivateEnergiesToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema;
