import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTaskTemplatesWhereUniqueInputSchema } from './PrivateTagsToTaskTemplatesWhereUniqueInputSchema';
import { PrivateTagsToTaskTemplatesCreateWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesCreateWithoutTaskInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';

export const PrivateTagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesCreateOrConnectWithoutTaskInput> = z.object({
  where: z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default PrivateTagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema;
