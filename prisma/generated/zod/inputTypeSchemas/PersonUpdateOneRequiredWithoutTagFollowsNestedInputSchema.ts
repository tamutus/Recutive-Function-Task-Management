import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutTagFollowsInputSchema } from './PersonCreateWithoutTagFollowsInputSchema';
import { PersonUncheckedCreateWithoutTagFollowsInputSchema } from './PersonUncheckedCreateWithoutTagFollowsInputSchema';
import { PersonCreateOrConnectWithoutTagFollowsInputSchema } from './PersonCreateOrConnectWithoutTagFollowsInputSchema';
import { PersonUpsertWithoutTagFollowsInputSchema } from './PersonUpsertWithoutTagFollowsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutTagFollowsInputSchema } from './PersonUpdateToOneWithWhereWithoutTagFollowsInputSchema';
import { PersonUpdateWithoutTagFollowsInputSchema } from './PersonUpdateWithoutTagFollowsInputSchema';
import { PersonUncheckedUpdateWithoutTagFollowsInputSchema } from './PersonUncheckedUpdateWithoutTagFollowsInputSchema';

export const PersonUpdateOneRequiredWithoutTagFollowsNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutTagFollowsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutTagFollowsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutTagFollowsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutTagFollowsInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutTagFollowsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutTagFollowsInputSchema),z.lazy(() => PersonUpdateWithoutTagFollowsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutTagFollowsInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutTagFollowsNestedInputSchema;
