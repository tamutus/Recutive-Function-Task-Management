import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTaskTemplatesWhereUniqueInputSchema } from './PrivateTagsToTaskTemplatesWhereUniqueInputSchema';
import { PrivateTagsToTaskTemplatesCreateWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesCreateWithoutTagInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema';

export const PrivateTagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesCreateWithoutTagInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default PrivateTagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema;
