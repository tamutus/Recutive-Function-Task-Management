import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutProjectsInputSchema } from './TagCreateWithoutProjectsInputSchema';
import { TagUncheckedCreateWithoutProjectsInputSchema } from './TagUncheckedCreateWithoutProjectsInputSchema';
import { TagCreateOrConnectWithoutProjectsInputSchema } from './TagCreateOrConnectWithoutProjectsInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedOneWithoutProjectsInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutProjectsInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutProjectsInputSchema),z.lazy(() => TagUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutProjectsInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict();

export default TagCreateNestedOneWithoutProjectsInputSchema;
