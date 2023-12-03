import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateNestedOneWithoutPrivateTagsInputSchema } from './PrivateEnergyCreateNestedOneWithoutPrivateTagsInputSchema';

export const PrivateEnergiesToPrivateTagsCreateWithoutTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsCreateWithoutTagInput> = z.object({
  energy: z.lazy(() => PrivateEnergyCreateNestedOneWithoutPrivateTagsInputSchema)
}).strict();

export default PrivateEnergiesToPrivateTagsCreateWithoutTagInputSchema;
