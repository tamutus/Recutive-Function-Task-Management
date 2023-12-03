import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateNestedOneWithoutEnergiesInputSchema } from './PrivateTagCreateNestedOneWithoutEnergiesInputSchema';

export const EnergiesToPrivateTagsCreateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsCreateWithoutEnergyInput> = z.object({
  notes: z.string().optional().nullable(),
  tag: z.lazy(() => PrivateTagCreateNestedOneWithoutEnergiesInputSchema)
}).strict();

export default EnergiesToPrivateTagsCreateWithoutEnergyInputSchema;
