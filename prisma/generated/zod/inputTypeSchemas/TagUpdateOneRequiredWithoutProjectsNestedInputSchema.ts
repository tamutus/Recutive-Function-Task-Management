import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutProjectsInputSchema } from './TagCreateWithoutProjectsInputSchema';
import { TagUncheckedCreateWithoutProjectsInputSchema } from './TagUncheckedCreateWithoutProjectsInputSchema';
import { TagCreateOrConnectWithoutProjectsInputSchema } from './TagCreateOrConnectWithoutProjectsInputSchema';
import { TagUpsertWithoutProjectsInputSchema } from './TagUpsertWithoutProjectsInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateToOneWithWhereWithoutProjectsInputSchema } from './TagUpdateToOneWithWhereWithoutProjectsInputSchema';
import { TagUpdateWithoutProjectsInputSchema } from './TagUpdateWithoutProjectsInputSchema';
import { TagUncheckedUpdateWithoutProjectsInputSchema } from './TagUncheckedUpdateWithoutProjectsInputSchema';

export const TagUpdateOneRequiredWithoutProjectsNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutProjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutProjectsInputSchema),z.lazy(() => TagUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutProjectsInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutProjectsInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagUpdateToOneWithWhereWithoutProjectsInputSchema),z.lazy(() => TagUpdateWithoutProjectsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutProjectsInputSchema) ]).optional(),
}).strict();

export default TagUpdateOneRequiredWithoutProjectsNestedInputSchema;
