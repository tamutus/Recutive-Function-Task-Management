import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesCreatelinksInputSchema } from './EnergiesToTaskTemplatesCreatelinksInputSchema';
import { EnergyCreateNestedOneWithoutTaskTemplatesInputSchema } from './EnergyCreateNestedOneWithoutTaskTemplatesInputSchema';

export const EnergiesToTaskTemplatesCreateWithoutTaskInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesCreateWithoutTaskInput> = z.object({
  info: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreatelinksInputSchema),z.string().array() ]).optional(),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutTaskTemplatesInputSchema)
}).strict();

export default EnergiesToTaskTemplatesCreateWithoutTaskInputSchema;
