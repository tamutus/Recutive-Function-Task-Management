import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutTasksInputSchema } from './TagCreateWithoutTasksInputSchema';
import { TagUncheckedCreateWithoutTasksInputSchema } from './TagUncheckedCreateWithoutTasksInputSchema';
import { TagCreateOrConnectWithoutTasksInputSchema } from './TagCreateOrConnectWithoutTasksInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedOneWithoutTasksInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutTasksInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutTasksInputSchema),z.lazy(() => TagUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict();

export default TagCreateNestedOneWithoutTasksInputSchema;
