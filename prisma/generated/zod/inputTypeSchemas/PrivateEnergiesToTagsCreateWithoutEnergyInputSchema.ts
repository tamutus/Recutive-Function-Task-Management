import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateNestedOneWithoutPrivateEnergiesInputSchema } from './TagCreateNestedOneWithoutPrivateEnergiesInputSchema';

export const PrivateEnergiesToTagsCreateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsCreateWithoutEnergyInput> = z.object({
  tag: z.lazy(() => TagCreateNestedOneWithoutPrivateEnergiesInputSchema)
}).strict();

export default PrivateEnergiesToTagsCreateWithoutEnergyInputSchema;
