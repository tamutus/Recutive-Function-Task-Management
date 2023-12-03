import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateNestedOneWithoutEnergiesInputSchema } from './TagCreateNestedOneWithoutEnergiesInputSchema';
import { PersonCreateNestedOneWithoutEnergyTagsInputSchema } from './PersonCreateNestedOneWithoutEnergyTagsInputSchema';

export const EnergiesToTagsCreateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTagsCreateWithoutEnergyInput> = z.object({
  info: z.string().optional().nullable(),
  tag: z.lazy(() => TagCreateNestedOneWithoutEnergiesInputSchema),
  tagger: z.lazy(() => PersonCreateNestedOneWithoutEnergyTagsInputSchema)
}).strict();

export default EnergiesToTagsCreateWithoutEnergyInputSchema;
