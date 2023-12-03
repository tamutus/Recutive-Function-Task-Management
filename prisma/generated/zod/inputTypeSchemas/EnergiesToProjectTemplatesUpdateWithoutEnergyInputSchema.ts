import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesUpdatelinksInputSchema } from './EnergiesToProjectTemplatesUpdatelinksInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ProjectTemplateUpdateOneRequiredWithoutEnergiesNestedInputSchema } from './ProjectTemplateUpdateOneRequiredWithoutEnergiesNestedInputSchema';

export const EnergiesToProjectTemplatesUpdateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesUpdateWithoutEnergyInput> = z.object({
  links: z.union([ z.lazy(() => EnergiesToProjectTemplatesUpdatelinksInputSchema),z.string().array() ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  project: z.lazy(() => ProjectTemplateUpdateOneRequiredWithoutEnergiesNestedInputSchema).optional()
}).strict();

export default EnergiesToProjectTemplatesUpdateWithoutEnergyInputSchema;
