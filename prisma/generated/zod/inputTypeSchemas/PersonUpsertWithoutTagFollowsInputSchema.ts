import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateWithoutTagFollowsInputSchema } from './PersonUpdateWithoutTagFollowsInputSchema';
import { PersonUncheckedUpdateWithoutTagFollowsInputSchema } from './PersonUncheckedUpdateWithoutTagFollowsInputSchema';
import { PersonCreateWithoutTagFollowsInputSchema } from './PersonCreateWithoutTagFollowsInputSchema';
import { PersonUncheckedCreateWithoutTagFollowsInputSchema } from './PersonUncheckedCreateWithoutTagFollowsInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutTagFollowsInputSchema: z.ZodType<Prisma.PersonUpsertWithoutTagFollowsInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutTagFollowsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutTagFollowsInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutTagFollowsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutTagFollowsInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutTagFollowsInputSchema;
