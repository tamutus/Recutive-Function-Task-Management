import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesUpdatelinksInputSchema } from './EnergiesToProjectTemplatesUpdatelinksInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergyUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema } from './EnergyUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema';

export const EnergiesToProjectTemplatesUpdateWithoutProjectInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesUpdateWithoutProjectInput> = z.object({
  links: z.union([ z.lazy(() => EnergiesToProjectTemplatesUpdatelinksInputSchema),z.string().array() ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  energy: z.lazy(() => EnergyUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema).optional()
}).strict();

export default EnergiesToProjectTemplatesUpdateWithoutProjectInputSchema;
