import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateNestedOneWithoutTagsInputSchema } from './PrivateEnergyCreateNestedOneWithoutTagsInputSchema';
import { TagCreateNestedOneWithoutPrivateEnergiesInputSchema } from './TagCreateNestedOneWithoutPrivateEnergiesInputSchema';

export const PrivateEnergiesToTagsCreateInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsCreateInput> = z.object({
  energy: z.lazy(() => PrivateEnergyCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutPrivateEnergiesInputSchema)
}).strict();

export default PrivateEnergiesToTagsCreateInputSchema;
