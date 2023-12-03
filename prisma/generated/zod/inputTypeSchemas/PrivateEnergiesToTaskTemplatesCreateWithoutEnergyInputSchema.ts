import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateNestedOneWithoutPrivateEnergiesInputSchema } from './TaskTemplateCreateNestedOneWithoutPrivateEnergiesInputSchema';

export const PrivateEnergiesToTaskTemplatesCreateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesCreateWithoutEnergyInput> = z.object({
  task: z.lazy(() => TaskTemplateCreateNestedOneWithoutPrivateEnergiesInputSchema)
}).strict();

export default PrivateEnergiesToTaskTemplatesCreateWithoutEnergyInputSchema;
