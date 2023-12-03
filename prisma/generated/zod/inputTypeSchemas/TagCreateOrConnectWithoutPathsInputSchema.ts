import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutPathsInputSchema } from './TagCreateWithoutPathsInputSchema';
import { TagUncheckedCreateWithoutPathsInputSchema } from './TagUncheckedCreateWithoutPathsInputSchema';

export const TagCreateOrConnectWithoutPathsInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutPathsInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutPathsInputSchema),z.lazy(() => TagUncheckedCreateWithoutPathsInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutPathsInputSchema;
