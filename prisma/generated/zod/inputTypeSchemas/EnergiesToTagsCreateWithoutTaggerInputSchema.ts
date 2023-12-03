import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateNestedOneWithoutTagsInputSchema } from './EnergyCreateNestedOneWithoutTagsInputSchema';
import { TagCreateNestedOneWithoutEnergiesInputSchema } from './TagCreateNestedOneWithoutEnergiesInputSchema';

export const EnergiesToTagsCreateWithoutTaggerInputSchema: z.ZodType<Prisma.EnergiesToTagsCreateWithoutTaggerInput> = z.object({
  info: z.string().optional().nullable(),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutEnergiesInputSchema)
}).strict();

export default EnergiesToTagsCreateWithoutTaggerInputSchema;
