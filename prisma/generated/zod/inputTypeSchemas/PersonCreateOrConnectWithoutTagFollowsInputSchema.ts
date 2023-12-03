import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutTagFollowsInputSchema } from './PersonCreateWithoutTagFollowsInputSchema';
import { PersonUncheckedCreateWithoutTagFollowsInputSchema } from './PersonUncheckedCreateWithoutTagFollowsInputSchema';

export const PersonCreateOrConnectWithoutTagFollowsInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutTagFollowsInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutTagFollowsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutTagFollowsInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutTagFollowsInputSchema;
