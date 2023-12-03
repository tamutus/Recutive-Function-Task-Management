import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateNestedOneWithoutPrivateTagsInputSchema } from './EnergyCreateNestedOneWithoutPrivateTagsInputSchema';

export const EnergiesToPrivateTagsCreateWithoutTagInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsCreateWithoutTagInput> = z.object({
  notes: z.string().optional().nullable(),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutPrivateTagsInputSchema)
}).strict();

export default EnergiesToPrivateTagsCreateWithoutTagInputSchema;
