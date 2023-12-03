import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergiesToProjectsUpdatelinksInputSchema } from './EnergiesToProjectsUpdatelinksInputSchema';
import { ProjectUpdateOneRequiredWithoutEnergiesNestedInputSchema } from './ProjectUpdateOneRequiredWithoutEnergiesNestedInputSchema';
import { EnergyUpdateOneRequiredWithoutProjectsNestedInputSchema } from './EnergyUpdateOneRequiredWithoutProjectsNestedInputSchema';

export const EnergiesToProjectsUpdateInputSchema: z.ZodType<Prisma.EnergiesToProjectsUpdateInput> = z.object({
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  links: z.union([ z.lazy(() => EnergiesToProjectsUpdatelinksInputSchema),z.string().array() ]).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutEnergiesNestedInputSchema).optional(),
  energy: z.lazy(() => EnergyUpdateOneRequiredWithoutProjectsNestedInputSchema).optional()
}).strict();

export default EnergiesToProjectsUpdateInputSchema;
