import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PrivateEnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyInput> = z.object({
  projectId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PrivateEnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyInputSchema;
