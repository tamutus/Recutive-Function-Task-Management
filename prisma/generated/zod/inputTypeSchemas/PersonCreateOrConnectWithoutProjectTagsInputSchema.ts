import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutProjectTagsInputSchema } from './PersonCreateWithoutProjectTagsInputSchema';
import { PersonUncheckedCreateWithoutProjectTagsInputSchema } from './PersonUncheckedCreateWithoutProjectTagsInputSchema';

export const PersonCreateOrConnectWithoutProjectTagsInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutProjectTagsInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutProjectTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutProjectTagsInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutProjectTagsInputSchema;
