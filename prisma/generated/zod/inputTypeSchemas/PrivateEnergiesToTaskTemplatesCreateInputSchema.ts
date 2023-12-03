import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateNestedOneWithoutPrivateEnergiesInputSchema } from './TaskTemplateCreateNestedOneWithoutPrivateEnergiesInputSchema';
import { PrivateEnergyCreateNestedOneWithoutTaskTemplatesInputSchema } from './PrivateEnergyCreateNestedOneWithoutTaskTemplatesInputSchema';

export const PrivateEnergiesToTaskTemplatesCreateInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesCreateInput> = z.object({
  task: z.lazy(() => TaskTemplateCreateNestedOneWithoutPrivateEnergiesInputSchema),
  energy: z.lazy(() => PrivateEnergyCreateNestedOneWithoutTaskTemplatesInputSchema)
}).strict();

export default PrivateEnergiesToTaskTemplatesCreateInputSchema;
