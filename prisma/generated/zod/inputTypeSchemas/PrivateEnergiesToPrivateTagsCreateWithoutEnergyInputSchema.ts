import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateNestedOneWithoutPrivateEnergiesInputSchema } from './PrivateTagCreateNestedOneWithoutPrivateEnergiesInputSchema';

export const PrivateEnergiesToPrivateTagsCreateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsCreateWithoutEnergyInput> = z.object({
  tag: z.lazy(() => PrivateTagCreateNestedOneWithoutPrivateEnergiesInputSchema)
}).strict();

export default PrivateEnergiesToPrivateTagsCreateWithoutEnergyInputSchema;
