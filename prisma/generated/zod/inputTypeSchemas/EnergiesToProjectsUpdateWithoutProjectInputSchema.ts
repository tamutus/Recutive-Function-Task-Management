import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergiesToProjectsUpdatelinksInputSchema } from './EnergiesToProjectsUpdatelinksInputSchema';
import { EnergyUpdateOneRequiredWithoutProjectsNestedInputSchema } from './EnergyUpdateOneRequiredWithoutProjectsNestedInputSchema';

export const EnergiesToProjectsUpdateWithoutProjectInputSchema: z.ZodType<Prisma.EnergiesToProjectsUpdateWithoutProjectInput> = z.object({
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  links: z.union([ z.lazy(() => EnergiesToProjectsUpdatelinksInputSchema),z.string().array() ]).optional(),
  energy: z.lazy(() => EnergyUpdateOneRequiredWithoutProjectsNestedInputSchema).optional()
}).strict();

export default EnergiesToProjectsUpdateWithoutProjectInputSchema;
