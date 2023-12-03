import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateNestedOneWithoutPrivateTagsInputSchema } from './EnergyCreateNestedOneWithoutPrivateTagsInputSchema';
import { PrivateTagCreateNestedOneWithoutEnergiesInputSchema } from './PrivateTagCreateNestedOneWithoutEnergiesInputSchema';

export const EnergiesToPrivateTagsCreateInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsCreateInput> = z.object({
  notes: z.string().optional().nullable(),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutPrivateTagsInputSchema),
  tag: z.lazy(() => PrivateTagCreateNestedOneWithoutEnergiesInputSchema)
}).strict();

export default EnergiesToPrivateTagsCreateInputSchema;
