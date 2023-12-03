import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutTasksInputSchema } from './TagCreateWithoutTasksInputSchema';
import { TagUncheckedCreateWithoutTasksInputSchema } from './TagUncheckedCreateWithoutTasksInputSchema';

export const TagCreateOrConnectWithoutTasksInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutTasksInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutTasksInputSchema),z.lazy(() => TagUncheckedCreateWithoutTasksInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutTasksInputSchema;
