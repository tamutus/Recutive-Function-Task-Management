import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTagsWhereUniqueInputSchema } from './PrivateEnergiesToTagsWhereUniqueInputSchema';
import { PrivateEnergiesToTagsCreateWithoutTagInputSchema } from './PrivateEnergiesToTagsCreateWithoutTagInputSchema';
import { PrivateEnergiesToTagsUncheckedCreateWithoutTagInputSchema } from './PrivateEnergiesToTagsUncheckedCreateWithoutTagInputSchema';

export const PrivateEnergiesToTagsCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergiesToTagsCreateWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default PrivateEnergiesToTagsCreateOrConnectWithoutTagInputSchema;
