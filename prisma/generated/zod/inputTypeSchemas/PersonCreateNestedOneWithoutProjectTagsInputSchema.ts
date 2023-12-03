import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutProjectTagsInputSchema } from './PersonCreateWithoutProjectTagsInputSchema';
import { PersonUncheckedCreateWithoutProjectTagsInputSchema } from './PersonUncheckedCreateWithoutProjectTagsInputSchema';
import { PersonCreateOrConnectWithoutProjectTagsInputSchema } from './PersonCreateOrConnectWithoutProjectTagsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutProjectTagsInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutProjectTagsInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutProjectTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutProjectTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutProjectTagsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutProjectTagsInputSchema;
