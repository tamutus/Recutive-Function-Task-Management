import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateNestedOneWithoutTagsInputSchema } from './EnergyCreateNestedOneWithoutTagsInputSchema';
import { PersonCreateNestedOneWithoutEnergyTagsInputSchema } from './PersonCreateNestedOneWithoutEnergyTagsInputSchema';

export const EnergiesToTagsCreateWithoutTagInputSchema: z.ZodType<Prisma.EnergiesToTagsCreateWithoutTagInput> = z.object({
  info: z.string().optional().nullable(),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutTagsInputSchema),
  tagger: z.lazy(() => PersonCreateNestedOneWithoutEnergyTagsInputSchema)
}).strict();

export default EnergiesToTagsCreateWithoutTagInputSchema;
