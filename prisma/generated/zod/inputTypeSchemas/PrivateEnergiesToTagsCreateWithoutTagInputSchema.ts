import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateNestedOneWithoutTagsInputSchema } from './PrivateEnergyCreateNestedOneWithoutTagsInputSchema';

export const PrivateEnergiesToTagsCreateWithoutTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsCreateWithoutTagInput> = z.object({
  energy: z.lazy(() => PrivateEnergyCreateNestedOneWithoutTagsInputSchema)
}).strict();

export default PrivateEnergiesToTagsCreateWithoutTagInputSchema;
