import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToPrivateTagsWhereUniqueInputSchema } from './PrivateEnergiesToPrivateTagsWhereUniqueInputSchema';
import { PrivateEnergiesToPrivateTagsCreateWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsCreateWithoutTagInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema';

export const PrivateEnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsCreateWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default PrivateEnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema;
