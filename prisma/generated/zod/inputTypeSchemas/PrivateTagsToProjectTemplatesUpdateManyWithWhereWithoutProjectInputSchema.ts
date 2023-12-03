import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectTemplatesScalarWhereInputSchema } from './PrivateTagsToProjectTemplatesScalarWhereInputSchema';
import { PrivateTagsToProjectTemplatesUpdateManyMutationInputSchema } from './PrivateTagsToProjectTemplatesUpdateManyMutationInputSchema';
import { PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutProjectInputSchema';

export const PrivateTagsToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => PrivateTagsToProjectTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesUpdateManyMutationInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default PrivateTagsToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema;
