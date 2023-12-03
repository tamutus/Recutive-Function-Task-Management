import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateNestedOneWithoutTagsInputSchema } from './EnergyCreateNestedOneWithoutTagsInputSchema';
import { TagCreateNestedOneWithoutEnergiesInputSchema } from './TagCreateNestedOneWithoutEnergiesInputSchema';
import { PersonCreateNestedOneWithoutEnergyTagsInputSchema } from './PersonCreateNestedOneWithoutEnergyTagsInputSchema';

export const EnergiesToTagsCreateInputSchema: z.ZodType<Prisma.EnergiesToTagsCreateInput> = z.object({
  info: z.string().optional().nullable(),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutEnergiesInputSchema),
  tagger: z.lazy(() => PersonCreateNestedOneWithoutEnergyTagsInputSchema)
}).strict();

export default EnergiesToTagsCreateInputSchema;
