import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutTasksInputSchema } from './TagCreateWithoutTasksInputSchema';
import { TagUncheckedCreateWithoutTasksInputSchema } from './TagUncheckedCreateWithoutTasksInputSchema';
import { TagCreateOrConnectWithoutTasksInputSchema } from './TagCreateOrConnectWithoutTasksInputSchema';
import { TagUpsertWithoutTasksInputSchema } from './TagUpsertWithoutTasksInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateToOneWithWhereWithoutTasksInputSchema } from './TagUpdateToOneWithWhereWithoutTasksInputSchema';
import { TagUpdateWithoutTasksInputSchema } from './TagUpdateWithoutTasksInputSchema';
import { TagUncheckedUpdateWithoutTasksInputSchema } from './TagUncheckedUpdateWithoutTasksInputSchema';

export const TagUpdateOneRequiredWithoutTasksNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutTasksNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutTasksInputSchema),z.lazy(() => TagUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutTasksInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagUpdateToOneWithWhereWithoutTasksInputSchema),z.lazy(() => TagUpdateWithoutTasksInputSchema),z.lazy(() => TagUncheckedUpdateWithoutTasksInputSchema) ]).optional(),
}).strict();

export default TagUpdateOneRequiredWithoutTasksNestedInputSchema;
