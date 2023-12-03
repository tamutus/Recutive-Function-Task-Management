import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateNestedOneWithoutPrivateTagsInputSchema } from './PrivateEnergyCreateNestedOneWithoutPrivateTagsInputSchema';
import { PrivateTagCreateNestedOneWithoutPrivateEnergiesInputSchema } from './PrivateTagCreateNestedOneWithoutPrivateEnergiesInputSchema';

export const PrivateEnergiesToPrivateTagsCreateInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsCreateInput> = z.object({
  energy: z.lazy(() => PrivateEnergyCreateNestedOneWithoutPrivateTagsInputSchema),
  tag: z.lazy(() => PrivateTagCreateNestedOneWithoutPrivateEnergiesInputSchema)
}).strict();

export default PrivateEnergiesToPrivateTagsCreateInputSchema;
