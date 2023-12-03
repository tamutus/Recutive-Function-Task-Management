import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergiesToTaskTemplatesUpdatelinksInputSchema } from './EnergiesToTaskTemplatesUpdatelinksInputSchema';
import { TaskTemplateUpdateOneRequiredWithoutEnergiesNestedInputSchema } from './TaskTemplateUpdateOneRequiredWithoutEnergiesNestedInputSchema';

export const EnergiesToTaskTemplatesUpdateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesUpdateWithoutEnergyInput> = z.object({
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  links: z.union([ z.lazy(() => EnergiesToTaskTemplatesUpdatelinksInputSchema),z.string().array() ]).optional(),
  task: z.lazy(() => TaskTemplateUpdateOneRequiredWithoutEnergiesNestedInputSchema).optional()
}).strict();

export default EnergiesToTaskTemplatesUpdateWithoutEnergyInputSchema;
