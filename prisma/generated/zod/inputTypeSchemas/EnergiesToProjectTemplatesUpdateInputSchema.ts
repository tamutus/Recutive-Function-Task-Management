import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesUpdatelinksInputSchema } from './EnergiesToProjectTemplatesUpdatelinksInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ProjectTemplateUpdateOneRequiredWithoutEnergiesNestedInputSchema } from './ProjectTemplateUpdateOneRequiredWithoutEnergiesNestedInputSchema';
import { EnergyUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema } from './EnergyUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema';

export const EnergiesToProjectTemplatesUpdateInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesUpdateInput> = z.object({
  links: z.union([ z.lazy(() => EnergiesToProjectTemplatesUpdatelinksInputSchema),z.string().array() ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  project: z.lazy(() => ProjectTemplateUpdateOneRequiredWithoutEnergiesNestedInputSchema).optional(),
  energy: z.lazy(() => EnergyUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema).optional()
}).strict();

export default EnergiesToProjectTemplatesUpdateInputSchema;
