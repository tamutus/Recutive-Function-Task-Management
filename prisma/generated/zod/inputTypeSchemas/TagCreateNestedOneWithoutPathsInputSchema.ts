import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutPathsInputSchema } from './TagCreateWithoutPathsInputSchema';
import { TagUncheckedCreateWithoutPathsInputSchema } from './TagUncheckedCreateWithoutPathsInputSchema';
import { TagCreateOrConnectWithoutPathsInputSchema } from './TagCreateOrConnectWithoutPathsInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedOneWithoutPathsInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutPathsInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutPathsInputSchema),z.lazy(() => TagUncheckedCreateWithoutPathsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutPathsInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict();

export default TagCreateNestedOneWithoutPathsInputSchema;
